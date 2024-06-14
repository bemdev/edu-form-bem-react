import QuestionsWidget__item from './QuestionsWidget__item'

describe('QuestionsWidget__item component test', () => {
    it('QuestionsWidget__item no empty render', () => {
        const wrapper = shallow(<QuestionsWidget__item />)
        expect(wrapper.isEmptyRender()).toBe(false)
    })
})
