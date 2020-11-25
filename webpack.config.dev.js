import path from 'path';

export default {

    devtool : 'eval-source-map',
    entry : [

        path.join(__dirname , '/view/index.js')

        ],
    output : {

        path : __dirname,
        filename : 'bundle.js',
        publicPath : '/'

    },

    module : {
        loaders : [
            {
                test : /\.js$/,
                include : path.join(__dirname , 'view'),
                loaders: [ 'babel-loader'],
            },
            {
                test : /\.css$/,
                loaders : ['style-loader' , 'css-loader']
            },
            {
                test : /\.png$/,
                loaders : ['file-loader', 'url-loader']
            }
        ]
    },

    resolve : {
        extensions : ['.js']
    }
}