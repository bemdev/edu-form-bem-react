import Progress from './Progress'

describe('Progress component test', () => {
    it('Progress no empty render', () => {
        const wrapper = shallow(<Progress />)
        expect(wrapper.isEmptyRender()).toBe(false)
    })
})
