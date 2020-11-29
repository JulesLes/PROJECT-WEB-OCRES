// YourComponent.stories.js
import React from 'react';
import Bourse from '../components/Bourse/Bourse.js';
import '../components/Bourse/Bourse.css';
import { Container, Row, Col } from 'reactstrap';


export default {
  title: 'Bourse',
};

export const test = () => <Bourse />;
