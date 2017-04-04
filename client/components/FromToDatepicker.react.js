import 'rc-calendar/assets/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'rc-calendar';
import DatePicker from 'rc-calendar/lib/Picker';

function disabledDate(value) {
  return value > new Date() ? true : false;
};

export default class FromToDatepicker extends React.PureComponent {
  constructor(props) {
    super(props);
    this.fromHandler = this.props.fromHandler;
  };

  render() {
  return (
    <div>
      From:
        <DatePicker
          onChange={this.props.onChangeDateFrom}
          calendar={<Calendar timePicker={null} disabledDate={disabledDate} />}
        >
          {
            ({ value }) => {
              return (
                <span>
                    <input
                      placeholder="From"
                      style={{ width: 250 }}
                      readOnly
                      style={{ marginRight: 20, marginLeft: 5 }}
                      value={this.props.fromTime && this.props.fromTime.format('YYYY-MM-DD') || ''}
                    />
                    </span>
              );
            }
          }
        </DatePicker>
        To:
        <DatePicker
          onChange={this.props.onChangeDateTo}
          calendar={<Calendar timePicker={null} disabledDate={disabledDate} /> }
        >
          {
            ({ value }) => {
              return (
                <span>
                    <input
                      placeholder="To"
                      style={{ width: 250 }}
                      readOnly
                      style={{ marginLeft: 5 }}
                      value={this.props.toTime && this.props.toTime.format('YYYY-MM-DD') || ''}
                    />
                    </span>
              );
            }
          }
        </DatePicker>
      </div>
    );
  };
};
