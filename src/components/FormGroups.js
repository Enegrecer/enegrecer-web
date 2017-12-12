import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Label, Input } from 'reactstrap';
import { ESTADOS } from '../constants'


export function EstadoFormGroup(props) {
  return (
    <FormGroup>
      <Label for={props.id}>Estado</Label>
      <Input
        type="select"
        name={props.id}
        id={props.id}
        onChange={event => props.handleChange(event, 'estado')}
        value={props.estado}
      >
        <option value="">Escolha uma opção</option>
        {
          ESTADOS.map((estado, key) => <option key={key} value={estado}>{estado}</option>)
        }
      </Input>
    </FormGroup>
  )
}

EstadoFormGroup.propTypes = {
  id: PropTypes.string.isRequired,
  estado: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
