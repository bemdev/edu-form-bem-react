import Variants_multi from './Variants_view_multi'

describe('Variants_multi component test', () => {
    it('Variants_multi no empty render', () => {
        const wrapper = shallow(<Variants_multi />)
        expect(wrapper.isEmptyRender()).toBe(false)
    })
})
