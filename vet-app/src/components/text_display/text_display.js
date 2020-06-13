import React from 'react';
//import style
import './text_display.css';
//import Reset button into text component
import Reset_button from '../reset_button/reset_button.js';

//Text display will display the text and change the text based
//on which photo is clicked or if reset button is clicked
class Text_display extends React.Component{
  render(){
        const display_text =`"At vero eos et accusamus et iusto odio dignissimos
        ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
        dolores et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est laborum
        et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
        quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est,
        omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut
        rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
        non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
        voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."`;
    return(
        <div className='text_reset-container'>
          <div className ='text_display'>{display_text}</div>
          <div clasName ='reset_button'><Reset_button /></div>
        </div>
    );
  }
}

// create function to Pull, and Display text from server about diagnosis

export default Text_display;
