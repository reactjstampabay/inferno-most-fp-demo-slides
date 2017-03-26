// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
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

import jordanWalkeOnReact30 from '../assets/jordan-walke-on-react30.jpg'
import jordanWalkeSetState from '../assets/jordan-walke-setState.png'
import reactSchedule from '../assets/react-schedule.png'
import rxjsCompanies from '../assets/rxjscompanies.png'

const images = {
  jordanWalkeOnReact30,
  jordanWalkeSetState,
  reactSchedule,
  rxjsCompanies,
}

preloader(images)

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quartenary: '#CECECE'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
})

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['zoom']} bgColor='primary'>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Getting Functional & Reactive:
          </Heading>
          <Text margin='10px 0 0' textColor='tertiary' size={1} fit bold>
            Building a React/Redux-like Architecture
          </Text>
          <Text margin='10px 0 0' textColor='tertiary' size={1} fit bold>
            w/ Inferno, Most, & FP Tools/Techniques
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor='tertiary'>
          <Heading size={6} textColor='primary' caps>Typography</Heading>
          <Heading size={1} textColor='secondary'>Heading 1</Heading>
          <Heading size={2} textColor='secondary'>Heading 2</Heading>
          <Heading size={3} textColor='secondary'>Heading 3</Heading>
          <Heading size={4} textColor='secondary'>Heading 4</Heading>
          <Heading size={5} textColor='secondary'>Heading 5</Heading>
          <Text size={6} textColor='secondary'>Standard text</Text>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading size={6} textColor='secondary' caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    )
  }
}
