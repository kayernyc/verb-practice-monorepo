import React from 'react';
import './App.css';
import { Quiz } from './containers/Quiz';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Verb practice</h1>
      </header>
      <main>
        <p>
          Twee roof party beard kombucha chambray. Typewriter cardigan meh, chambray seitan quis
          bushwick artisan blog. Kinfolk pinterest affogato, deep v 90's qui waistcoat shabby chic
          hell of photo booth excepteur franzen dolor. Disrupt banh mi sed fashion axe, unicorn 90's
          waistcoat tumeric tumblr shabby chic irony scenester chartreuse chambray selvage. Pug ad
          kogi pok pok 90's umami synth cold-pressed listicle laborum minim meditation post-ironic.
          Edison bulb tumeric pop-up hell of bitters voluptate asymmetrical YOLO non.
        </p>
        <p>
          Proident non pok pok cliche air plant blog aesthetic ex lo-fi pug health goth chambray
          portland. Portland hot chicken VHS, tilde pabst succulents cred ullamco deep v elit magna
          flexitarian YOLO. Migas jianbing shabby chic, cornhole trust fund actually mustache green
          juice cred next level dolor bicycle rights coloring book. Single-origin coffee enim offal
          PBR&B organic. Snackwave incididunt pug lo-fi irony four loko keffiyeh semiotics vaporware
          drinking vinegar roof party kombucha salvia green juice cardigan. Sriracha truffaut iPhone
          prism wolf.
        </p>
        <p>
          Aesthetic vaporware organic selvage schlitz. In do DIY twee. Cred helvetica praxis,
          pickled tonx enamel pin meggings. Sint woke selvage ugh schlitz.
        </p>
        <Quiz />
      </main>
    </div>
  );
}

export default App;
