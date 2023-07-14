import React from "react";

export enum SelectedPage {
    Home = 'home',
    Benefits = 'benefits',
    OurClasses = 'ourClasses',
    ContactUs = 'contactUs',
}

export interface IBenefitType {
    title: string;
    description: string;
    icon: React.JSX.Element;
}

export interface IClassType {
    name: string;
    description?: string;
    image: string;
}