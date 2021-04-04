import React, { Component, CSSProperties } from 'react'

type bgTypes = 'primary' |'secondary' | 'success' | 'danger' |'warning' |'info' | 'light' | 'dark' | 'muted' | 'white'

type variantTypes = 'light' |'dark'

type expandTypes = 'sm' | 'md' | 'lg' | 'xl'

export interface HeaderProps {
 /**
 * The background color of the Navbar
 */
 backgroundColor: bgTypes;
 /**
 * The variant color scheme of the Navbar
 */
 variantType: variantTypes;
 /**
 * The expand size of the Navbar
 * @default lg
 */
 expandType: expandTypes;
 /**
 * The main title of the navbar
 */
 navbarText: String;
 /**
 * The url to navigate to on main navbar title press
 */
 navbarLink: String;
 /**
 * The object to provide CSS properties to the Navbar
 */
 style: CSSProperties;
}

export default class Header extends Component<HeaderProps> { }
