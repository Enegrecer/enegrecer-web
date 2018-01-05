import React from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { ESTADOS } from '../constants';

export function EstadoFormGroup({ handleChange, ...rest }) {
  return (
    <SelectField
      {...rest}
      hintText="Escolha uma opção"
      floatingLabelText="Estado"
      floatingLabelFixed
      fullWidth
      onChange={(_, __, v) => handleChange(v, 'estado')}
    >
      {
        ESTADOS.map(
          val => <MenuItem key={val} value={val} primaryText={val} />
        )
      }
    </SelectField>
  )
}

export function TelefoneFormGroup({ handleChange, ...props }) {
  return (
    <div>
      <label htmlFor={props.id}>Telefone</label>
      <InputMask
        {...props}
        type="text"
        onChange={e => handleChange(e.target.value, 'telefone')}
        mask="(99) 9 9999-9999"
        maskChar=" "
      />
    </div>
  )
}

export function RacaFormGroup({ handleChange, ...rest }) {
  return (
    <SelectField
      {...rest}
      hintText="Escolha uma opção"
      floatingLabelText={'Cor ou Raca'}
      floatingLabelFixed
      fullWidth
      onChange={(_, $_, v) => handleChange(v, 'raca')}
    >
      <MenuItem value={'preta'} primaryText="Preta" />
      <MenuItem value={'parda'} primaryText="Parda" />
    </SelectField>
  )
}

const formGroupPropTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

EstadoFormGroup.propTypes = { ...formGroupPropTypes };

TelefoneFormGroup.propTypes = { ...formGroupPropTypes };

RacaFormGroup.propTypes = { ...formGroupPropTypes };
