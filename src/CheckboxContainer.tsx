import * as React from "react";

interface Props {
  getSelectedFilters: any;
}

type Choices = {
  name: string;
  type: string;
  id: number;
};

type State = {
  choices: Array<Choices>;
};

class CheckboxContainer extends React.Component<Props, State> {
  state: State = {
    choices: [
      {
        id: 1,
        name: "Kip",
        type: "meat",
      },
      {
        id: 2,
        name: "Gehakt",
        type: "meat",
      },
      {
        id: 3,
        name: "Zalm",
        type: "fish",
      },
      {
        id: 4,
        name: "Rijst",
        type: "rice",
      },
      {
        id: 5,
        name: "Overig",
        type: "other",
      },
    ],
  };

  render() {
    const { choices } = this.state;
    const { getSelectedFilters } = this.props;

    return choices.map(choice => (
      <div className="checkbox-container" key={choice.id}>
        <label htmlFor={choice.name}>{choice.name}</label>
        <input
          type="checkbox"
          value={choice.name}
          name={choice.name}
          onChange={e => getSelectedFilters(e.currentTarget, choice.id)}
        />
      </div>
    ));
  }
}

export default CheckboxContainer;
