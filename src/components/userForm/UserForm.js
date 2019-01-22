import './userForm.scss';

export class UserForm extends Component {
  roles = ['Admin', 'User', 'Guest'];

  static getDerivedStateFromProps({ data }, currentState) {
    if (!data) return null;
    const props = Object.entries(data);
    const isStateEmpty = props.some(([key]) => currentState[key] && !currentState[key].value);
    if (isStateEmpty) {
      const state = {};
      props
        .forEach(([key, value]) => state[key] = { value, error: '' });
      return state;
    }
    return null;
  }

  constructor(props) {
    super(props);

    this.fields = [
      { label: 'email', reg: /^\w+@\w+\.[a-z]{2,}$/, placeholder: 'Enter your email' },
      { label: 'firstName', reg: /^[^ ]{3,20}$/, placeholder: 'Enter your name' },
      { label: 'lastName', reg: /^[^ ]{3,20}$/, placeholder: 'Enter your surname' },
      {
        label: 'password', reg: /^[^ ]{6,20}$/, secure: true, placeholder: 'Enter your password'
      },
      {
        label: 'repeatPassword', reg: /^[^ ]{6,20}$/, secure: true, placeholder: 'Repeat your password'
      }
    ];

    this.state = {};

    this.fields.forEach(({ label }) => this.state[label] = ({
      value: '',
      error: ''
    }));
  }

  onChange = ({ target }) => {
    const field = this.state[target.name];
    if (/checkbox|radio/i.test(target.type)) {
      this.setState({ [target.name]: { ...field, value: target.checked } });
    } else {
      this.setState({ [target.name]: { ...field, value: target.value } });
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const data = {};
    Object.entries(this.state)
      .forEach(([key, { value }]) => data[key] = value);
    if (this.props.onSave) {
      this.props.onSave(data);
    }
  }

  onValidate = ({ target }) => {
    const field = this.fields.find(item => item.label === target.name);
    const stateField = this.state[target.name];
    let error = '';

    if (!target.value || !field.reg.test(target.value)) {
      error = 'Is not valid';
    } else {
      error = '';
    }

    if (target.name === 'repeatPassword' && this.state.password.value !== target.value) {
      error = 'Password are not equaled';
    }

    this.setState({
      [target.name]: { ...stateField, error }
    });
  }

  isButtonDisabled() {
    return Object.entries(this.state).some(([key, { error, value }]) => error || !value);
  }

  render() {
    const { state } = this;
    const { disabled = {} } = this.props;
    return (
      <form action="" className="form" autoComplete="off" onSubmit={this.onSubmit}>
        <div>
          {
            this.fields.map((field, index) => (
              <div key={index} className="form-field">
                <input
                  type={field.secure ? 'password' : 'text'}
                  name={field.label}
                  value={state[field.label].value}
                  placeholder={field.placeholder}
                  disabled={disabled[field.label]}
                  onBlur={this.onValidate}
                  onChange={this.onChange}
                />
                {
                  state[field.label].error
                  && <mark>{state[field.label].error}</mark>
                }
              </div>
            ))
          }
        </div>
        <br />
        <button type="submit" disabled={this.isButtonDisabled()}>Send</button>
      </form>
    );
  }
}
