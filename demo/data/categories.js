import ButtonDemo from '../components/button/ButtonDemo';
import ButtonOptions from '../components/button/ButtonOptions';
import ButtonDescription from '../components/button/ButtonDescription';

import ButtonGroupDemo from '../components/buttongroup/ButtonGroupDemo';
import ButtonGroupOptions from '../components/buttongroup/ButtonGroupOptions';

import NavBarDemo from '../components/navbar/NavBarDemo';
import NavBarOptions from '../components/navbar/NavBarOptions';

import Icons from '../components/IconsDemo';
import Grid from '../components/grid/GridDemo';
import EventPlannerDemo from '../components/eventplanner/EventPlannerDemo';

import InputDemo from '../components/input/InputDemo';
import InputOptions from '../components/input/InputOptions';

import CheckBoxDemo from '../components/checkbox/CheckBoxDemo';
import CheckBixOptions from '../components/checkbox/CheckBoxOptions';

import PopupDemo from '../components/popup/PopupDemo';
import PopupOptions from '../components/popup/PopupOptions';

import RadioDemo from '../components/radio/RadioButtonDemo';
import RadioOptions from '../components/radio/RadioButtonOptions';

import FormDemo from '../components/form/FormDemo';
import FormOptions from '../components/form/FormOptions';

import SelectDemo from '../components/select/SelectDemo';
import SelectOptions from '../components/select/SelectOptions';

import MultiSelectDemo from '../components/select/MultiSelectDemo';
import MultiSelectOptions from '../components/select/MultiSelectOptions';

import DatePickerDemo from '../components/datepicker/DatePickerDemo';
import DatePickerOptions from '../components/datepicker/DatePickerOptions';

import DateRangePickerDemo from '../components/datepicker/DateRangePickerDemo';
import DateRangePickerOptions from '../components/datepicker/DateRangePickerOptions';

import LabelDemo from '../components/label/LabelDemo';
import LabelOptions from '../components/label/LabelOptions';

import TextAreaDemo from '../components/textarea/TextAreaDemo';
import TextAreaOptions from '../components/textarea/TextAreaOptions';

import FeedbackDemo from '../components/feedback/FeedbackDemo';
import FeedbackDescription from '../components/feedback/FeedbackDescription';

export default [
    {
        name: 'Components',
        subcategories: [
            {
                name: 'Button',
                link: '/',
                components: [
                    {
                        name: 'Demo', component: ButtonDemo
                    }, {
                        name: 'Options', component: ButtonOptions
                    }, {
                        name: 'Description', component: ButtonDescription
                    }
                ]
            },
            {
                name: 'ButtonGroup',
                link: '/',
                components: [
                    {
                        name: 'Demo', component: ButtonGroupDemo
                    }, {
                        name: 'Options', component: ButtonGroupOptions
                    }
                ]
            },
            {
                name: 'NavBar',
                link: '/',
                components: [
                    {
                        name: 'Demo', component: NavBarDemo
                    }, {
                        name: 'Options', component: NavBarOptions
                    }
                ]
            },
            {
                name: 'Input',
                link: '/',
                components: [
                    {
                        name: 'Demo', component: InputDemo
                    }, {
                        name: 'Options', component: InputOptions
                    }
                ]
            },
            {
                name: 'TextArea',
                link: '/',
                components: [
                    {
                        name: 'Demo', component: TextAreaDemo
                    }, {
                        name: 'Options', component: TextAreaOptions
                    }
                ]
            },
            {
                name: 'Checkbox',
                link: '/',
                components: [
                    {
                        name: 'Demo', component: CheckBoxDemo
                    }, {
                        name: 'Options', component: CheckBixOptions
                    }
                ]
            },
            {
                name: 'Radio',
                link: '/',
                components: [
                    {
                        name: 'Demo', component: RadioDemo
                    }, {
                        name: 'Options', component: RadioOptions
                    }
                ]
            },
            {
                name: 'Popup',
                link: '/',
                components: [
                    {
                        name: 'Demo', component: PopupDemo
                    }, {
                        name: 'Options', component: PopupOptions
                    }
                ]
            },
            {
                name: 'Form',
                link: '/',
                components: [
                    {
                        name: 'Demo', component: FormDemo
                    }, {
                        name: 'Options', component: FormOptions
                    }
                ]
            },
            {
                name: 'Select',
                link: '/',
                components: [
                    {
                        name: 'Demo', component: SelectDemo
                    }, {
                        name: 'Options', component: SelectOptions
                    }
                ]
            },
            {
                name: 'MultiSelect',
                link: '/',
                components: [
                    {
                        name: 'Demo', component: MultiSelectDemo
                    }, {
                        name: 'Options', component: MultiSelectOptions
                    }
                ]
            },
            {
                name: 'DatePicker',
                link: '/',
                components: [
                    {
                        name: 'Demo', component: DatePickerDemo
                    }, {
                        name: 'Options', component: DatePickerOptions
                    }
                ]
            },
            {
                name: 'DateRangePicker',
                link: '/',
                components: [
                    {
                        name: 'Demo', component: DateRangePickerDemo
                    }, {
                        name: 'Options', component: DateRangePickerOptions
                    }
                ]
            },
            {
                name: 'Label',
                link: '/',
                components: [
                    {
                        name: 'Demo', component: LabelDemo
                    }, {
                        name: 'Options', component: LabelOptions
                    }
                ]
            },
            {
                name: 'Feedback',
                link: '/',
                components: [
                    {
                        name: 'Demo', component: FeedbackDemo
                    }, {
                        name: 'Description', component: FeedbackDescription
                    }
                ]
            }
        ]
    },
    {
        name: 'Other',
        subcategories: [
            {
                name: 'Icons',
                components: [
                    {
                        name: 'Demo', component: Icons
                    }
                ]
            },
            {
                name: 'Grid',
                components: [
                    {
                        name: 'Demo', component: Grid
                    }
                ]
            },
            {
                name: 'Event_Planner',
                components: [
                    {
                        name: 'Demo', component: EventPlannerDemo
                    }
                ]
            }
        ]
    }
];
