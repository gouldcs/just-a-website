import './App.css';
import {Tuesdays} from './Tuesdays';
import { Alert, Pane, Heading, Button, Text, Popover } from 'evergreen-ui';

function App() {
  return (
    <div className="App">
      <div style={{width:'100%'}}>
        <Pane display="flex" padding={16} background="tint2">
          <Heading size={600}>Just a Website</Heading>
        </Pane>
      </div>
      <Pane className='content' padding={64}>
        <Alert  intent="none"
          title="You can contribute to this site btw. I approve any PR that builds. Fork the repo and get to work."
          marginBottom={32}>
            <br/>
            <a href="https://github.com/gouldcs/just-a-website" target="_blank">
                <Button appearance={"primary"}>Fork Repo</Button>
            </a>
        </Alert>
        <Pane display="flex" padding={32} width="100%" flexDirection="row">
          <Pane padding={16} margin={16} maxWidth={800} minWidth={300} borderRadius={10} display="flex" flexDirection='column' justifyContent="center" border="default">
            <div>
              <Heading size={800} color="muted">Nothing to see here</Heading>
              <Text>This is just a website.</Text>
              <marquee>
                It literally does nothing! Perfectly Inconspicuous! Don't try today! Just click away now!
              </marquee>
              <Text>But seriously. In all honesty, this site serves zero purpose.</Text>
              <br/><br/>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank">
                <Button appearance={"primary"}>Leave now</Button>
              </a>
            </div>
            {isTuesday() && (<Tuesdays />)}
          </Pane>
          <Pane padding={16} margin={16} borderRadius={10} width="100%" maxWidth={400} display="flex" flexDirection="column" border="default">
            <Heading size={600}><marquee>BUY ME BUFFALO WILD WINGS</marquee></Heading>
            <Pane padding={8}>
              <img src={require('./assets/bdubs.jpg')} style={{width:100}}/>
            </Pane>
            <a href="https://venmo.com/u/kingcammyg" target="_blank">
              <Button appearance='primary'>CLICK HERE TO BUY NOW</Button>
            </a>
          </Pane>
        </Pane>
        <Pane padding={32}>
          <Text size={500}>This webpage and its developers are not being subverted by
            <span><strong> Buffalo Wild Wings.</strong></span></Text>
          <br/><br/>
          <Popover content={
            <Pane width={240} height={40} display="flex" alignItems="center" justifyContent="center" flexDirection="column">
              <Text><strong>It most definitely is.</strong></Text>
          </Pane>
          }
          >
            <img src={require('./assets/bduuuubs.png')} style={{width:'100%'}} />
          </Popover>
        </Pane>
      </Pane>
    </div>
  );
}

function isTuesday() {
    const joemama0 = new Date();

    return joemama0.getDay() === 3;
}

export default App;
