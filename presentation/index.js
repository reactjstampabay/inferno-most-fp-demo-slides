// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from 'spectacle'

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
import('normalize.css')
import('spectacle/lib/themes/default/index.css')
import('../assets/css/presentation-styles.css')

import jordanWalkeOnReact30 from '../assets/img/jordan-walke-on-react30.jpg'
import jordanWalkeSetState from '../assets/img/jordan-walke-setState.png'
import reactSchedule from '../assets/img/react-schedule.png'
import rxjsCompanies from '../assets/img/rxjscompanies.png'
import trollDancing from '../assets/img/troll-dancing.gif'
import trollWavy from '../assets/img/troll-wavy.gif'

const images = {
  jordanWalkeOnReact30,
  jordanWalkeSetState,
  reactSchedule,
  rxjsCompanies,
  trollDancing,
  trollWavy,
}

const urls = {
  groupthink: 'https://www.psychologytoday.com/basics/groupthink',
  djikstraOnJavaVsHaskell: 'http://chrisdone.com/posts/dijkstra-haskell-java',
  immutableJS: 'https://github.com/facebook/immutable-js',
  reduxObservable: 'https://github.com/redux-observable/redux-observable',
  rxjs: 'https://github.com/ReactiveX/rxjs',
  most: 'https://github.com/cujojs/most',
  cycle: 'http://cycle.js.org/',
  elm: 'http://elm-lang.org/',
  pureScript: 'http://www.purescript.org/',
  reason: 'https://facebook.github.io/reason/',
  joshTwitter: 'https://twitter.com/_joshburgess',
  joshGitHub: 'https://github.com/joshburgess',
  reactJSTampaBay: 'http://www.meetup.com/ReactJS-Tampa-Bay/',
  reactJSTampaBayGitHub: 'https://github.com/reactjstampabay',
  reactJSTampaBayTwitter: 'https://twitter.com/reactjstampabay',
}

preloader(images)

const theme = createTheme({
  primary: '#FFF',
  secondary: '#03fca2',
  tertiary: '#5903fc',
  quartenary: '#fcf603'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
})

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['zoom']} bgColor='primary'>
          <Heading fit caps lineHeight={1} textColor='secondary'>
            Getting Functional & Reactive:
          </Heading>
          <Text margin='10px 0 0' textColor='tertiary' fit bold>
            Building a React + Redux-like
          </Text>
          <Text margin='10px 0 0' textColor='tertiary' fit bold>
            Architecture with Inferno.js, 
          </Text>
          <Text margin='10px 0 0' textColor='tertiary' fit bold>
            Most.js, & Various Functional
          </Text>
          <Text margin='10px 0 0' textColor='tertiary' fit bold>
            Programming Tools & Techniques
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor='tertiary' textColor='primary'>
          <Heading caps fit textColor='secondary' textFont='primary'>
            By Josh Burgess
          </Heading>
          <List>
            <ListItem>
              Twitter: <a target='_blank' href={urls.joshTwitter}>@_joshburgess</a>
              <br/>
              GitHub: <a target='_blank' href={urls.joshGitHub}>@joshburgess</a>
              <br/>
              <br/>
            </ListItem>
            <ListItem>
              For <a target='_blank' href={urls.reactJSTampaBay}>ReactJS Tampa Bay</a>
              <br/>
              <br/>
              Twitter: <a target='_blank' href={urls.reactJSTampaBayTwitter}>@reactjstampabay</a>
              <br/>
              GitHub: <a target='_blank' href={urls.reactJSTampaBayGitHub}>@reactjstampabay</a>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <Heading textColor='primary' fit caps>About Me</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <List>
            <ListItem>
              <span>React & Redux's functional patterns & influences made me curious about FP and UI architecture design (in general).</span>
            </ListItem>
            <br />
            <ListItem>
              <Appear>
                <span>I've looked at and like various aspects of many non-JS, functional (or partially functional) languages, like Elixir, Clojure & ClojureScript, Scala, Rust, Swift, etc., ...</span>
              </Appear>
              <br /><br />
            </ListItem>
            <ListItem>
              <Appear>
                <span>...but I'm currently <strong>most interested</strong> in ML-family languages, like <strong>Elm, PureScript, Haskell, OCaml & Reason, and F# & Fable</strong>.</span>
              </Appear>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <List>
            <ListItem>
              <span>I was also inspired to start learning about different UI architecture design philosophies & ended up becoming very interested in Reactive Programming.</span>
            </ListItem>
            <br />
            <ListItem>
              <Appear>
                <span>I've spent a fair amount of time playing around with libraries like <strong>RxJS, Flyd, Most</strong>, etc. & frameworks like <strong>Cycle.js</strong>, and...</span>
              </Appear>
            </ListItem>
            <br />
            <ListItem>
              <Appear>
                <span>...I've come to believe that reactive programming is one of the most, if not the single most, elegant & powerful of all UI programming paradigms we have today.</span>
              </Appear>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <List>
            <ListItem>
              <span>And, finally, I hate <a target='_blank' href={urls.groupthink}>groupthink</a>, and I believe there is often little to no correlation between the quality & popularity of tools, languages, & paradigms used in our industry</span>
            </ListItem>
            <br />
            <ListItem>
              <Appear>
                <span>For proof of this, just look at the widespread use of the original Angular, Java, or class & inheritance based Object Oriented Programming (in general).</span>
              </Appear>
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor='primary'>
            <Image src={images.trollDancing} height={700} />
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <Heading textColor='primary' fit caps>Is Functional Programming</Heading>
          <Heading textColor='primary' fit caps>Just a Bunch of</Heading>
          <Heading textColor='secondary' fit caps>Hipster</Heading>
          <Heading textColor='secondary' fit caps>Bullshit?!</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <Heading textColor='primary' fit caps>NO!</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <Heading textColor='secondary' fit caps>Popularity !== Quality</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <List>
            <ListItem>
              <span>Functional Programming is rooted in mathematics, academic research, & modern programming language design theory.</span>
            </ListItem>
            <br />
            <ListItem>
              <Appear>
                <span>
                  <span>Jordan Walke, the creator of React, took a lot of influence from FP. He even wrote the first prototypes of React in Standard ML.</span>
                  <br /><br />
                  <span style={{ fontSize: '30px' }}>
                    -- Mentioned in:<br /><a href='https://www.youtube.com/watch?v=_0T5OSSzxms'>Cheng Lou - Taming the Meta Language - React Conf 2017</a>
                  </span>
                </span>
              </Appear>
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor='tertiary' textColor='primary'>
            <Image src={images.jordanWalkeOnReact30} margin='-150px auto 0 -20px' height={900} />
        </Slide>
        <Slide bgColor='tertiary' textColor='primary'>
            <Image src={images.jordanWalkeSetState} margin='-150px auto 0 -20px' height={900} />
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <BlockQuote>
            <Quote style={{ fontSize: '28px', marginTop: '-160px' }}>
              <p>A very practical reason for preferring functional programming in a freshman course is that most students already have a certain familiarity with imperative programming. Facing them with the novelty of functional programming immediately drives home the message that there is more to programming than they thought. And quickly they will observe that functional programming elegantly admits solutions that are very hard (or impossible) to formulate with the programming vehicle of their high school days.</p>
              <Appear>
                <p>A fundamental reason for the preference is that functional programs are much more readily appreciated as mathematical objects than imperative ones, so that you can teach what rigorous reasoning about programs amounts to. [...]</p>
              </Appear>
              <Appear>
                <p>Finally, in the specific comparison of Haskell versus Java, Haskell, though not perfect, is of a quality that is several orders of magnitude higher than Java, which is a mess (and needed an extensive advertising campaign and aggressive salesmanship for its commercial acceptance). It is bad enough that, on the whole, industry accepts designs of well-identified lousiness as “de facto” standards. Personally I think that the University should keep the healthier alternatives alive.</p>
              </Appear>
            </Quote>
            <Cite>
              <a href={urls.djikstraOnJavaVsHaskell}>-- Dijkstra on Haskell and Java</a>
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor='primary'>
            <Image src={images.trollWavy} height={700} />
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <Heading textColor='secondary' fit caps>React</Heading>
          <Heading textColor='primary' fit caps>versus</Heading>
          <Heading textColor='secondary' fit caps>Reactive Programming</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <List>
            <ListItem>
              <Text textColor={'secondary'}><strong>React</strong><span> is a library.</span></Text>
              <p> It's only partially "reactive" in the sense that UI updates get triggered when component props change.</p>
            </ListItem>
            <br />
            <ListItem>
              <Text textColor={'secondary'}><strong>Reactive Programming</strong><span> is a paradigm.</span></Text>
              <p>It's all about asynchronous data streams & the automatic propagation of change. Think declarative async data pipelines.</p>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <List>
            <ListItem>
              "React" was actually somewhat of a poor name choice for the library.
            </ListItem>
            <br />
            <ListItem>
              React is really much more about the component model & low level scheduling than reactive programming.
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor='tertiary' textColor='primary'>
            <Image src={images.reactSchedule} margin='-150px auto 0 -100px' height={900} />
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <Heading textColor='secondary' fit caps>What I like about React:</Heading>
          <Heading textColor='primary' fit caps>v = f(d)</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <Heading textColor='secondary' fit caps>What I like about Redux:</Heading>
          <Heading textColor='primary' fit caps>Predictability, pure functions,</Heading>
          <Heading textColor='primary' fit caps>one way data flow,  & logging</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <Heading textColor='primary' fit caps>I can achieve these</Heading>
          <Heading textColor='primary' fit caps>things with Inferno & Most</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <Heading textColor='secondary' fit caps>If you're unfamiliar with Inferno:</Heading>
          <p>It's a lightweight, high performance UI library which features an API roughly the same as React.</p>
          <p>However, it also has cool extras, like giving stateless functional components access to lifecycle events.</p>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <Heading textColor='secondary' fit caps>If you're unfamiliar with Most:</Heading>
          <p>If we said that RxJS is like lodash or underscore for asynchronous programming, it could be said that Most is like lodash/fp or Ramda for asynchronous programming.</p>
          <p>Although offering a fluent (chaining) API like RxJS, it also offers a functional API where the stream(s) are passed in last, much like how lodash/fp & Ramda offer functional APIs where the array(s) are passed in last.</p>
          <p>This simple API change is important, because it lets us use functional composition, currying, & partial application.</p>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <Heading textColor='secondary' fit caps>What to expect from this demo:</Heading>
          <p>A walkthrough of how to reimplement the core ideas of Redux using reactive streams.</p>
          <p>Insight into various JS libraries I like & why I like them.</p>
          <p>Information on how you can take FP in JS further than React, Redux, and map, filter, & reduce.</p>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <Heading textColor='secondary' fit caps>What NOT to expect from this demo:</Heading>
          <p>An extremely unique or interesting app.</p>
          <p>The simplest, most straight forward way to create a counter app.</p>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary' textColor='primary'>
          <Heading textColor='secondary' fit caps>Alright, enough!</Heading>
          <Heading textColor='primary' fit caps>Let's look at the code.</Heading>
        </Slide>
      </Deck>
    )
  }
}
