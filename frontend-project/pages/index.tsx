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

        <div>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-center">
            Interactive Video Player
          </h2>
          <VideoPlayer />
        </div>
        {/* Example with a placeholder video source (replace with an actual video URL for testing) */}
        {/* <VideoPlayer /> */}
      </main>
    </div>
  );
}
