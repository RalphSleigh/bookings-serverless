const webpack = require('webpack');
const path = require('path');
//const MinifyPlugin = require("babel-minify-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const PROD = (process.env.NODE_ENV === 'production');

console.log(PROD);

module.exports = {
    mode: PROD ? 'production' : 'development',
    entry: {
        app: './src/front/index.tsx',
    },

    resolve: {
        alias: {
            //'@fortawesome/free-solid-svg-icons$': '@fortawesome/free-solid-svg-icons/shakable.es.js',
            "react-html-email":'react'
        },
        fallback: {
            "path": false
        },
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    output: {
        path: path.resolve('public'),
        filename: 'bundle.[name].js'
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            /*{
                test: /core\.js$/,
                use: [{
                    loader: 'imports-loader',
                    options: {
                        type: 'commonjs',
                        imports: 'process',
                    },
                }],
            },
            /*
            {
            test:    /\.js$/,

            use:     ['babel-loader']
        },
        */
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'resolve-url-loader']
        }, {
            test: /\.(gif|ttf|eot|svg|woff2?)$/, use: {
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }
        }]
    },
    externals: {
        fs: '{}'
    },

    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 1000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    name:"vendor",
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    name:"initial",
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },

    plugins: [
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-gb/)
    ]
};


if (PROD) module.exports.plugins.push(new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('production')
    }
}));

else{ 
    module.exports.devtool = 'inline-source-map'
    module.exports.plugins.push(new webpack.SourceMapDevToolPlugin({
    filename: "[file].map",
    exclude: "vendor"
}), new BundleAnalyzerPlugin());
}
