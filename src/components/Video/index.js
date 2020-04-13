import React from 'react';

// import { Container } from './styles';

import {connect} from 'react-redux'

const Video = ({activeModule, activeLesson}) => (
    <div> 
        <strong> Módulo: {activeModule.title} </strong>
        <br/>
        <strong> Aula: {activeLesson.title} </strong>
    </div>
)

export default connect(state => ({
    activeLesson: state.course.activeLesson,
    activeModule: state.course.activeModule
}))(Video);
