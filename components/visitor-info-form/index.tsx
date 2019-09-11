import React from 'react';
import {
  Modal,
  TextField,
  ChoiceGroup,
  PrimaryButton
} from 'office-ui-fabric-react';
import { noSSR } from 'react-csr';
import { useState, useEffect } from 'react';
import css from './index.scss';
import { composedState, deComposedState, validateEmail } from '../../utils';

function getVisitorInfo() {
  return JSON.parse(localStorage.getItem('whoru'));
}

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
