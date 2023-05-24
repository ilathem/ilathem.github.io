import { AnimationControls } from "framer-motion"

export interface Sections {
    about: boolean,
    contact: boolean,
}

export interface SectionsControls {
    [section: string]: AnimationControls
}