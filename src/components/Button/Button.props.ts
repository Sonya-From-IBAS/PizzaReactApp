import {  ButtonHTMLAttributes, ReactNode } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    appearence?: 'big' | 'small';
}