import Variants_view_short from './Variants_view_short'

describe('Variants_view_short component test', () => {
    it('Variants_view_short no empty render', () => {
        const wrapper = shallow(<Variants_view_short />)
        expect(wrapper.isEmptyRender()).toBe(false)
    })
})
