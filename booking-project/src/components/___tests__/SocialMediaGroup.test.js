import React, { Component } from 'react'
import { render, screen, cleanup } from '@testing-library/react';
import {SocialMediaGroup } from '../socialMedia/SocialMediaGroup'

test ('Should render Social Media', () =>{
    const SocialMediaGroup =  true;
    const SocialMediaGroupElement = render (SocialMediaGroup)
    expect(SocialMediaGroupElement).toBeDefined();
    expect(SocialMediaGroupElement).toContainHTML('<div>');
})
