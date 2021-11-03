import React from 'react';
import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';

const allAnimals = () => {
    const loggedIn = Auth.loggedIn();
    

}

export default allAnimals;
