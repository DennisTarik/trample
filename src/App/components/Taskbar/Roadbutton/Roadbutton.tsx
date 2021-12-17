import { Link } from 'react-router-dom';

export default function Roadbutton(): JSX.Element {
  return (
    <Link to="/card">
      <svg
        width="71"
        height="71"
        viewBox="0 0 71 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M71 35.5C71 55.1061 55.1061 71 35.5 71C15.8939 71 0 55.1061 0 35.5C0 15.8939 15.8939 0 35.5 0C55.1061 0 71 15.8939 71 35.5Z"
          fill="#87D2D2"
        />
        <path
          d="M54.294 43.3135V36.0569H49.5955V43.3135V48.1512V55.4079H54.294V48.1512V45.7324V43.3135Z"
          fill="#064142"
        />
        <path
          d="M54.294 16.7059H49.5955V38.4757H54.294V16.7059Z"
          fill="#064142"
        />
        <path
          d="M21.4043 16.7059H16.7058V55.4078H21.4043V16.7059Z"
          fill="#064142"
        />
        <path
          d="M37.8494 16.7059H33.1509V26.3814H37.8494V16.7059Z"
          fill="#064142"
        />
        <path
          d="M37.8494 31.2191H33.1509V40.8946H37.8494V31.2191Z"
          fill="#064142"
        />
        <path
          d="M37.8494 45.7324H33.1509V55.4079H37.8494V45.7324Z"
          fill="#064142"
        />
      </svg>
    </Link>
  );
}
