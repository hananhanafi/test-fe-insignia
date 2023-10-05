import './App.css';
import Container from './components/layouts/Container';
import Menu from './components/shared/Menu/Menu';
import Videos from './components/main/Videos/Index';
import Activity from './components/main/Activity/Index';
import People from './components/main/People/Index';
import Documents from './components/main/Documents/Index';
import Channels from './components/main/Channels/Index';


function App() {
  return (
    <Container title="About" >  
      <div className='bg-main min-h-screen pt-14 sm:pt-20 px-4 sm:px-10'>
        <div className='mt-4 hidden sm:flex flex-col'>
          <hr className='text-main-light w-full'/>
          <Menu data={['Videos','People','Documents','Events','Comunities','Favorites','Channels']}/>
          <hr className='text-main-light w-full'/>
        </div>
        <div className="sm:mt-8 grid sm:grid-cols-3 gap-4">
          <div className='sm:col-span-2'>
            <Videos/>
          </div>
          <div>
            <Activity/>
          </div>
        </div>
        <div className="max-[600px]:hidden grid sm:grid-cols-3 gap-4">
          <div className='sm:col-span-2 grid grid-rows-2 gap4'>
            <People/>
            <Documents/>
          </div>
          <div>
            <Channels/>
          </div>
        </div>
        <div className="sm:hidden grid sm:grid-rows-3 gap-4">
          <People/>
          <Channels/>
          <Documents/>
        </div>
      </div>
    </Container>
  );
}

export default App;
