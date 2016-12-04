import React from 'react'
import Form, {FormInput} from '../../../components/Form'
import Item from './Item'

const containerStyle = {
  flex: '1 1 auto',
  margin: '0 10px',
  width: '300px',
  border: '1px solid black',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch'
}

const titleStyle = {
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center'
}

const itemsStyle = {
  flex: '1 1 auto',
  padding: '1em',
  minHeight: '50px',
  borderBottom: '1px solid black',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch'
}

const formStyle = {
  padding: '1em',
  alignItems: 'stretch'
}

const inputStyle = {
  width: '100%',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'baseline'
}

const labelStyle = {
  width: '40%',
  textAlign: 'right'
}

const textareaStyle = {
  marginTop: '0.5em',
  marginLeft: '9%',
  width: '91%'
}

export default class Inventory extends React.Component {
  onSubmit (fields) {
    if (!fields.name || !fields.quantity) {
      throw new Error('Name and quantity cannot be empty')
    }

    this.props.addItem(fields)
  }

  render () {
    const {character} = this.props
    const items = character.inventory.map((item, i) => {
      const itemProps = {
        ...item,
        delete: this.props.deleteItem.bind(null, i),
        key: i
      }

      return <Item {...itemProps} />
    })

    const formProps = {
      style: formStyle,
      onSubmit: this.onSubmit.bind(this)
    }

    return (
      <div style={containerStyle}>
        <div style={titleStyle}>Inventory</div>
        <div style={itemsStyle}>
          {items}
        </div>
        <div>
          <div style={titleStyle}>Add Item</div>
          <Form {...formProps}>
            <div style={inputStyle}>
              <div style={labelStyle}>Name:</div>
              <FormInput type='text' name='name' />
            </div>
            <div style={inputStyle}>
              <div style={labelStyle}>Quantity:</div>
              <FormInput type='number' name='quantity' />
            </div>
            <div style={inputStyle}>
              <div style={labelStyle}>Weight:</div>
              <FormInput type='number' name='weight' />
            </div>
            <div style={inputStyle}>
              <div style={labelStyle}>Value:</div>
              <FormInput type='text' name='value' />
            </div>
            <div>
              <div style={labelStyle}>Description:</div>
              <FormInput style={textareaStyle} type='textarea' name='description' />
            </div>
          </Form>
        </div>
      </div>
    )
  }
}
