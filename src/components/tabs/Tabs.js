import './tabs.scss';
import { TabNav } from './TabNav';
import { Tab } from './Tab';

export class Tabs extends Component {
  state = {
    selectedIndex: 0
  }

  selectTab = (selectedIndex) => {
    this.setState({
      selectedIndex
    });
  }

  componentDidMount() {
    const { selectedIndex } = this.props;
    this.setState({
      selectedIndex
    });
  }

  render() {
    const { children } = this.props;
    const { selectedIndex } = this.state;
    const tabs = children.filter(child => child.type === Tab);
    const titles = tabs.map(tab => tab.props.title);
    const currTab = tabs[selectedIndex];
    const currTabContent = currTab.props.children;
    return (
      <div className="tabs">
        <TabNav titles={titles} selectedIndex={selectedIndex} selectTab={this.selectTab} />
        <section className="tab-content">
          {
            tabs[selectedIndex] && currTabContent
          }
        </section>
      </div>
    );
  }
}
