import Head from 'next/head';
import TemplateGallery from '../src/components/TemplateGallery';
import DragDropEditor from '../src/components/DragDropEditor';
import RealtimePreview from '../src/components/RealtimePreview';
import ProgressBar from '../src/components/ProgressBar';
import VideoPlayer from '../src/components/VideoPlayer';

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Frontend Project Demo</title>
        <meta name="description" content="Demo of UI components" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="space-y-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 my-6">
          UI Components Demo
        </h1>

        <TemplateGallery />
        <DragDropEditor />
        <RealtimePreview />
        <ProgressBar progress={65} /> {/* Example progress */}
        <VideoPlayer videoSrc="" /> {/* Example with no video source */}
        {/* Example with a placeholder video source (replace with an actual video URL for testing) */}
        {/* <VideoPlayer videoSrc="https://www.w3schools.com/html/mov_bbb.mp4" /> */}
      </main>
    </div>
  );
}
