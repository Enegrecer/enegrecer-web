import React from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { ESTADOS } from '../constants';

export function EstadoFormGroup(props) {
  return (
    <div>
      <label htmlFor={props.id}>Estado</label>
      <SelectField
        id={props.id}
        value={props.value}
        floatingLabelText="Escolha uma opção"
        fullWidth
        onChange={(_, __, v) => props.handleChange(v, 'estado')}
      >
        {
          ESTADOS.map(
            val => <MenuItem key={val} value={val} primaryText={val} />
          )
        }
      </SelectField>
    </div>
  )
}

export function TelefoneFormGroup(props) {
  return (
    <dib>
      <label htmlFor={props.id}>Telefone</label>
      <InputMask
        type="text"
        name={props.id}
        id={props.id}
        onChange={e => props.handleChange(e.target.value, 'telefone')}
        value={props.value}
        mask="(99) 9 9999-9999"
        maskChar=" "
      />
    </dib>
  )
}

export function RacaFormGroup(props) {
  return (
    <div>
      <label htmlFor={props.id}>Cor ou Raca</label>
      <SelectField
        id={props.id}
        value={props.value}
        floatingLabelText="Escolha uma opção"
        fullWidth
        onChange={(_, $_, v) => props.handleChange(v, 'raca')}
      >
        <MenuItem value={'preta'} primaryText="Preta" />
        <MenuItem value={'parda'} primaryText="Parda" />
      </SelectField>
    </div>
  )
}

EstadoFormGroup.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

TelefoneFormGroup.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

RacaFormGroup.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
