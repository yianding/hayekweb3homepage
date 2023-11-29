// Vant 中有个别组件是以函数的形式提供的，包括 Toast，Dialog，Notify 和 ImagePreview 组件。在使用函数组件时，unplugin-vue-components 无法自动引入对应的样式，因此需要手动引入样式。

// Toast
// import { showToast } from 'vant';
import 'vant/es/toast/style';

// Dialog
// import { showDialog } from 'vant';
import 'vant/es/dialog/style';