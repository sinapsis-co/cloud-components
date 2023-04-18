import { Fragment } from 'react';

export function splitText(text: string): JSX.Element[] {
  return text.split('\n').map((item, idx) => {
    return (
      <Fragment key={idx}>
        {item}
        <br />
      </Fragment>
    );
  });
}

export function splitTextAsArray(text: string): string[] {
  return text?.split('\n');
}
