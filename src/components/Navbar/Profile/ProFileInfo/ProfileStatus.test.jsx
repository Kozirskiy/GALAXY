import React from "react";
import create from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', ()=> {
    test('stus from props should be in state', () => {
        const component = create(<ProfileStatus status='Test web developer'/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('Test web developer');
    });

    // test('find by type', () => {
    //     const component = create(<ProfileStatus status='Test web developer'/>);
    //     const instance = component.getInstance();
    //     instance.findByType('input');
    //     expect(instance.state.status).toBe('Test web developer');
    // });
});


