import { useParams } from 'react-router-dom';

const CoursePage = () => {
  const { courseId } = useParams();

  return (
    <div>Course.page, {courseId}</div>
  )
}

export default CoursePage;
