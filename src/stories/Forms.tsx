import "./forms.css";
export interface FormsProps {
  /** Is this the principal call to action on the page? */
  type?: "radio" | "checkbox";
  /** What label to use */
  label?: string;
  color?: string;
}

/** Primary UI component for user interaction */
export const Forms = ({ type = "radio", label, ...props }: FormsProps) => {
  return (
    <span className={["storybook-form"].join(" ")}>
      <input type={type} {...props} />
      {label && <label className="storybook-form-label">{label}</label>}
    </span>
  );
};
