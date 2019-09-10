import {
  Modal,
  TextField,
  ChoiceGroup,
  PrimaryButton
} from 'office-ui-fabric-react';
import { noSSR } from 'react-csr';
import { useState, Dispatch, useEffect } from 'react';
const css = require('./index.scss');

export const VisitorInfoForm = noSSR(() => {
  const [show, updateShow] = useState(true);

  const form = composedState({
    name: '',
    gender: 'boy',
    email: ''
  });

  const save = () => {
    try {
      localStorage.setItem('whoru', JSON.stringify(deComposedState(form)));
      updateShow(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (getVisitorInfo()) {
      updateShow(false);
    }
  });

  return (
    <Modal isOpen={show}>
      <div className={css.container}>
        <TextField
          label="Name"
          required
          value={form.name.value}
          onChange={(_, newVal) => form.name.update(newVal)}
        />
        <TextField
          label="Email"
          value={form.email.value}
          onChange={(_, newVal) => form.email.update(newVal)}
          onGetErrorMessage={validateEmail}
          validateOnFocusOut
        />
        <ChoiceGroup
          label="Gender"
          selectedKey={form.gender.value}
          onChange={(_, newVal) => form.gender.update(newVal.key)}
          options={[
            {
              key: 'boy',
              text: 'Boy'
            },
            {
              key: 'girl',
              text: 'Girl'
            }
          ]}
        />
        <PrimaryButton
          style={{ alignSelf: 'center' }}
          text="Ok"
          onClick={() => save()}
        />
      </div>
    </Modal>
  );
});

function getVisitorInfo() {
  return JSON.parse(localStorage.getItem('whoru'));
}

function validateEmail(value: string) {
  return /[0-9a-zA-Z_-]+@[0-9a-zA-Z_-]+\.(com|cn|net|org)/.test(value)
    ? ''
    : 'Incorrect email format';
}

type ComposedState<T> = {
  [P in keyof T]: {
    value: T[P];
    update: Dispatch<T[P]>;
  };
};

function composedState<T extends { [key: string]: any }>(
  any: T
): ComposedState<T> {
  let result = {} as any;
  Object.keys(any).forEach(key => {
    const [value, update] = useState(any[key]);
    result[key] = {
      value,
      update
    };
  });
  return result;
}

function deComposedState<T extends ComposedState<any>>(
  any: T
): T extends ComposedState<infer P> ? P : any {
  let result = {} as any;
  Object.keys(any).forEach(key => {
    result[key] = any[key].value;
  });
  return result;
}
