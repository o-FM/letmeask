import { ButtonHTMLAttributes } from "react";

import '../../style/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
    return (
        <button className="button" {...props} />
    );
}