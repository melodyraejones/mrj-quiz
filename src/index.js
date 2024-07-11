import "./index.css";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import {
  TextControl,
  Flex,
  FlexBlock,
  FlexItem,
  Button,
  SelectControl,
} from "@wordpress/components";
import { registerBlockType } from "@wordpress/blocks";
import MultiLineInput from "./MultiLineInput";

const personalityTypes =
  typeof mrjplugin_data !== "undefined" &&
  Array.isArray(mrjplugin_data.personality_types)
    ? mrjplugin_data.personality_types.map((type) => ({
        label: type,
        value: type,
      }))
    : [];

registerBlockType("mrjplugin/quiz", {
  title: "What's Your Wisdom Profile?",
  icon: "smiley",
  category: "common",
  attributes: {
    questions: {
      type: "array",
      default: [
        {
          question: "",
          choices: [
            {
              text: "",
              personalityType: "",
              imageUrl: "",
            },
          ],
          imageUrl: "",
        },
      ],
    },
    personalityTypes: {
      type: "array",
      default: [],
    },
  },
  edit: EditComponent,
  save: function () {
    return null;
  },
});

function EditComponent({ attributes, setAttributes }) {
  const { questions, personalityTypes } = attributes;
  function removeQuestion(questionIndex) {
    const newQuestions = questions.filter(
      (_, index) => index !== questionIndex
    );
    setAttributes({ questions: newQuestions });
  }
  function addQuestion() {
    const newQuestions = [
      ...questions,
      {
        question: "",
        choices: [{ text: "", personalityType: "", imageUrl: "" }],
        imageUrl: "",
      },
    ];
    setAttributes({ questions: newQuestions });
  }

  function addChoice(questionIndex) {
    const newQuestions = [...questions];
    newQuestions[questionIndex].choices.push({
      text: "",
      personalityType: "",
      imageUrl: "",
    });
    setAttributes({ questions: newQuestions });
  }

  function removeChoice(questionIndex, choiceIndex) {
    const newQuestions = [...questions];
    newQuestions[questionIndex].choices = newQuestions[
      questionIndex
    ].choices.filter((_, idx) => idx !== choiceIndex);
    setAttributes({ questions: newQuestions });
  }

  function updateQuestionText(questionText, index) {
    const newQuestions = [...questions];
    newQuestions[index].question = questionText;
    setAttributes({ questions: newQuestions });
  }

  function onSelectQuestionImage(media, questionIndex) {
    const newQuestions = [...questions];
    newQuestions[questionIndex].imageUrl = media.url;
    setAttributes({ questions: newQuestions });
  }

  function updateChoiceText(questionIndex, choiceIndex, newText) {
    const newQuestions = [...questions];
    newQuestions[questionIndex].choices[choiceIndex].text = newText;
    setAttributes({ questions: newQuestions });
  }

  function updatePersonalityType(questionIndex, choiceIndex, newType) {
    const newQuestions = [...questions];
    newQuestions[questionIndex].choices[choiceIndex].personalityType = newType;
    setAttributes({ questions: newQuestions });
  }

  function onSelectChoiceImage(media, questionIndex, choiceIndex) {
    const newQuestions = [...questions];
    newQuestions[questionIndex].choices[choiceIndex].imageUrl = media.url;
    setAttributes({ questions: newQuestions });
  }

  function updatePersonalityTypes(newTypes) {
    setAttributes({ personalityTypes: newTypes });
  }

  return (
    <div className="mrj-quiz-edit-block">
      <MultiLineInput
        label="Personality Types"
        help="Enter personality types, one per line."
        value={personalityTypes}
        onChange={updatePersonalityTypes}
      />
      {questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <TextControl
            value={question.question}
            onChange={(text) => updateQuestionText(text, questionIndex)}
            label={`Question ${questionIndex + 1}`}
          />
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => onSelectQuestionImage(media, questionIndex)}
              allowedTypes={["image"]}
              render={({ open }) => (
                <Button onClick={open} isSecondary>
                  {question.imageUrl ? "Change Image" : "Upload Image"}
                </Button>
              )}
            />
          </MediaUploadCheck>
          {question.imageUrl && (
            <img
              src={question.imageUrl}
              alt={`Uploaded for question ${questionIndex + 1}`}
            />
          )}
          {question.choices.map((choice, choiceIndex) => (
            <Flex key={choiceIndex}>
              <FlexBlock>
                <TextControl
                  value={choice.text}
                  onChange={(newText) =>
                    updateChoiceText(questionIndex, choiceIndex, newText)
                  }
                  label="Choice Text"
                />
                <SelectControl
                  label="Personality Type"
                  value={choice.personalityType}
                  options={personalityTypes.map((type) => ({
                    label: type,
                    value: type,
                  }))}
                  onChange={(newType) =>
                    updatePersonalityType(questionIndex, choiceIndex, newType)
                  }
                />
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={(media) =>
                      onSelectChoiceImage(media, questionIndex, choiceIndex)
                    }
                    allowedTypes={["image"]}
                    render={({ open }) => (
                      <Button onClick={open} isSecondary>
                        {choice.imageUrl ? "Change Image" : "Upload Image"}
                      </Button>
                    )}
                  />
                </MediaUploadCheck>
                {choice.imageUrl && (
                  <img
                    src={choice.imageUrl}
                    alt={`Image for choice ${choiceIndex + 1} of question ${
                      questionIndex + 1
                    }`}
                  />
                )}
              </FlexBlock>
              <FlexItem>
                <Button
                  isSecondary
                  onClick={() => removeChoice(questionIndex, choiceIndex)}
                >
                  Delete
                </Button>
              </FlexItem>
            </Flex>
          ))}
          <Button
            className="choice-btn"
            onClick={() => addChoice(questionIndex)}
            isSecondary
          >
            Add Another Choice
          </Button>
          <Button isDestructive onClick={() => removeQuestion(questionIndex)}>
            Delete Question
          </Button>
          <hr className="next-question-line" />
        </div>
      ))}
      <Button onClick={addQuestion} isPrimary>
        Add Question
      </Button>
    </div>
  );
}
