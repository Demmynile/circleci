import Adapter from 'enzyme-adapter-react-17-updated'
import '@testing-library/jest-dom';
import {configure} from 'enzyme'

configure({adapter : new Adapter()})
