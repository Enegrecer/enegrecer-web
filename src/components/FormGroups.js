import React from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { ESTADOS } from '../constants';

export function EstadoFormGroup(props) {
  return (
    <SelectField
      id={props.id}
      value={props.value}
      hintText="Escolha uma opção"
      floatingLabelText="Estado"
      floatingLabelFixed
      fullWidth
      onChange={(_, __, v) => props.handleChange(v, 'estado')}
    >
      {
        ESTADOS.map(
          val => <MenuItem key={val} value={val} primaryText={val} />
        )
      }
    </SelectField>
  )
}

export function TelefoneFormGroup(props) {
  return (
    <div>
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
    </div>
  )
}

export function RacaFormGroup(props) {
  return (
    <SelectField
      id={props.id}
      value={props.value}
      hintText="Escolha uma opção"
      floatingLabelText={'Cor ou Raca'}
      floatingLabelFixed
      fullWidth
      onChange={(_, $_, v) => props.handleChange(v, 'raca')}
    >
      <MenuItem value={'preta'} primaryText="Preta" />
      <MenuItem value={'parda'} primaryText="Parda" />
    </SelectField>
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
