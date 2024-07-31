import './App.css';
import React from 'react';
import classNames from 'classnames';
import Tag from './components/Tag';
import Note from './components/Note';
import Prayer from './components/Prayer';
import Answer from './components/Answer';
import TagRow from './components/TagRow';
import AnswerContainer from './components/AnswerContainer';
import AnswerCarousel from './components/AnswerCarousel';
import NoteBox from './components/NoteBox';
import MarkdownEditor from './components/MarkdownEditor';
import MenuItem from './components/MenuItem';
import MenuSection from './components/MenuSection';
import FlashMessage from './components/FlashMessage';

const tags = [
  {
    id: 1,
    label: 'Finance',
    backgroundColor: '#ffece1',
    color: '#ff5c00',
  },
  {
    id: 2,
    label: 'Self-control',
    backgroundColor: '#e1f6ff',
    color: '#2c62b4',
  },
];

const notes = [
  {
    id: 1,
    title: 'I hear the Gospel in my dreams',
    content:
      'Hi, *Pluto*! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui id leo suscipit imperdiet.',
    isPrivate: false,
    createdAt: '2021-09-01T00:00:00.000Z',
  },
  {
    id: 2,
    title: 'Jesus is the Messiah',
    content:
      'Hi, *Pluto*! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui id leo suscipit imperdiet.',
    isPrivate: false,
    createdAt: '2021-09-01T00:00:00.000Z',
  },
];

const answers = [
  {
    id: 1,
    title: 'Be patient ⏰',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui id leo suscipit imperdiet. Nunc congue mauris id felis pellentesque, non vulputate felis pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui id leo suscipit imperdiet. Nunc congue mauris id felis pellentesque, non vulputate felis pellentesque. ',
  },
  {
    id: 2,
    title: 'Gear up ⚙️',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui id leo suscipit imperdiet. Nunc congue mauris id felis pellentesque, non vulputate felis pellentesque.',
  },
];

const App = () => {
  const [markdown, setMarkdown] = React.useState(
    '### Note Title\nWrite a note...'
  );

  const answerContainerClass = classNames(
    { 'w-96': answers.length > 0 },
    { 'w-42': answers.length <= 0 }
  );

  return (
    <div className="flex flex-col justify-center items-center gap-y-4">
      <h1 className="text-2xl my-6">Playground phase</h1>

      <div className="flex">
        <div className="relative w-1/5 px-4">
          <MenuSection title="my topics" canAddMore>
            <MenuItem icon="action_key" active />
            <MenuItem icon="priority" title="answers" />
            <MenuItem icon="wysiwyg" title="notes" />
          </MenuSection>
          <FlashMessage classNames="absolute bottom-0 left-0 px-4" />
        </div>

        <div className="w-2/3">
          <Prayer
            summary="God is provider"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar urna vel efficitur iaculis. Praesent dapibus arcu et leo malesuada, in suscipit ligula tincidunt. Mauris malesuada lacinia eros. Proin sed maximus leo. Suspendisse at purus ac libero volutpat consequat."
            isLargeDisplay
            noteCount={2}
            answersCount={2}
            author="David Stanley"
            createdAt="2021-09-01T00:00:00.000Z"
            tags={
              <TagRow>
                {tags.map((tag) => (
                  <Tag
                    key={tag.id}
                    label={tag.label}
                    backgroundColor={tag.backgroundColor}
                    color={tag.color}
                  />
                ))}
              </TagRow>
            }
            notes={
              <NoteBox>
                {notes.map((note, idx) => (
                  <Note
                    key={note.id}
                    title={note.title}
                    content={note.content}
                    createdAt={note.createdAt}
                    author={note.author}
                    isOwn={idx % 2 === 0}
                  />
                ))}
              </NoteBox>
            }
            answers={
              <AnswerContainer className={answerContainerClass}>
                {answers.length > 0 ? (
                  <AnswerCarousel>
                    {answers.map((answer) => (
                      <Answer
                        key={answer.id}
                        title={answer.title}
                        content={answer.content}
                      />
                    ))}
                  </AnswerCarousel>
                ) : (
                  <p>No answers yet</p>
                )}
              </AnswerContainer>
            }
            editor={
              <MarkdownEditor
                author="David Stanley"
                markdown={markdown}
                setMarkdown={setMarkdown}
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default App;
