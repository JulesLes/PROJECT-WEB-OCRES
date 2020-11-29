// YourComponent.stories.js
import React from 'react';
import Country from '../components/Country/Country.js';
import '../components/Country/Country.css';
import { Container, Row, Col } from 'reactstrap';


export default {
  title: 'Country',
};

export const test = () => <Country />;
