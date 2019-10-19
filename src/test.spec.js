import React from 'react'
import { shallow } from 'enzyme'
import App from './components/App'
import TodoHeader from './containers/TodoHeader'

test('子コンポーネントが存在すること', () => {
  // == 準備 ==
  /** Appコンポーネントをshallowレンダリング */
  const wrapper = shallow(<App />)

  // == 検証 ==
  /** 各コンポーネントの数を取得し、1であればOK */
  expect(wrapper.find(TodoHeader).length).toBe(1)
})
