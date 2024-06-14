import QuestionsWidget from './QuestionsWidget'

describe('QuestionsWidget component test', () => {
    it('QuestionsWidget no empty render', () => {
        const wrapper = shallow(<QuestionsWidget />)
        expect(wrapper.isEmptyRender()).toBe(false)
    })
})
