import Timer from './Timer'

describe('Timer component test', () => {
    it('Timer no empty render', () => {
        const wrapper = shallow(<Timer />)
        expect(wrapper.isEmptyRender()).toBe(false)
    })
})
