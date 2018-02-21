webpackJsonp([0x5fcbc5d4b7b9],{354:function(e,n){e.exports={data:{markdownRemark:{html:'<p>Today, I attended the Machinery.AI Developer Conference in Seattle, WA. Highlights : </p>\n<ul>\n<li>Affordable, incase your company is not covering. $60 registration.</li>\n<li>Thanks to Capital One, free swag is always cool ! (fidget spinner on a pen ?! <img src="http://boredomtherapy.com/wp-content/uploads/2017/03/01-smiling-snake-emoji.png" width="16" height="16">)</li>\n</ul>\n<center><img src="https://pbs.twimg.com/media/DNrvYXSVwAAcbN9.jpg" width="50%" height="50%" /></center>\n<ul>\n<li>\n<p>NVIDIA started their talk with an overview of the machine learning field with focus on deep learning and were quick to point out the latest AI and HPC focussed <a href="https://www.nvidia.com/en-us/data-center/tesla-v100/">NVIDIA Tesla V100</a>. They explained how each deep learning phase (training, modelling and inferencing) have distributed and highly parallelizable characteristics and hence a perfect fit for the GPGPU paradigm. <a href="https://developer.nvidia.com/tensorrt">TensorRT</a> was specifically pointed out as perfect example of inferencing that boosts performance using GPUs. Deep learning frameworks such as MXNet, Tensorflow, CNTK and how Keras makes it easy to experiment with these frameworks was briefly discussed. The different types of machine Learning tasks  were explained with some examples : </p>\n<ul>\n<li>Supervised Learning</li>\n<li>Unsupervised Learning</li>\n<li>Reinforcement Learning</li>\n</ul>\n</li>\n<li>\n<p>Capital One\'s presentation gave an insight into the applications of machine learning within the banking industry. Fraud detection and predicting transaction labelling were two of the scenarios discussed. The rest (and most) of the talk focussed on what are the DOs and DON\'Ts of machine learning. Using an example of <a href="http://joelgrus.com/2016/05/23/fizz-buzz-in-tensorflow/">Fizz Buzz in Tensorflow</a> and <em>"everything seems like a nail when you have a hammer"</em> it was explained how not to apply machine learning where it\'s not really required. There are a lot of libraries and frameworks which can solve a good percentage of problems which may be seem like a machine learning problem at first but can be solved without using it e.g. image recognition APIs, speech recognition APIs. After you have a baseline solution using available frameworks, you can then improve the baseline solution, if required, by using machine learning. Once you decide to apply machine learning to improve the baseline solution, you can start with using linear/logistic regression models to solve the problem before using advanced features like SVM, random forests, neural networks and deep learning. Feature engineering was stressed as still the most important methodology to solve majority of the problems. For machine learning, it was explained how data wrangling is the most tedious task and since <em>"gravity works only one way"</em> how to weed out unwanted data and avoid training the model to recognize stuff that\'s not required. e.g. upside down giraffe or a bus. Finally, the talk focussed into deep learning and how starting with using established models and neural networks such as AlexNet, ImageNet and GoogLeNet before jumping into creating your own is a better approach. Using large neural networks tend to reduce feature engineering and small networks focus on solving subset of classification problems. To solve a problem with machine learning and small networks, try expressing the problem as a classification problem. e.g. web search can be boiled down to a labelling problem which is <a href="https://www.wired.com/2016/02/ai-is-changing-the-technology-behind-google-searches/">why Google is infusing deep learning in its classic PageRank algorithm</a>.</p>\n</li>\n<li>\n<p>We got a couple of hours to get hands-on experience with <a href="https://developer.nvidia.com/digits">DIGITS</a> for image classification in NVIDIA lab. Here are some notes :</p>\n<ul>\n<li>\n<p>Data sets :</p>\n<ul>\n<li>Kaggle.com</li>\n<li><a href="https://archive.ics.uci.edu/ml/datasets.html">UCI</a></li>\n<li><a href="http://yann.lecun.com/exdb/mnist/">MNIST</a></li>\n<li><a href="http://www.vision.caltech.edu/Image_Datasets/Caltech101">Caltech 101</a> </li>\n</ul>\n</li>\n<li>How networks evolve into models (image from NVIDIA):</li>\n</ul>\n<center><img src="https://dplogscontent.blob.core.windows.net/dplogs/networks2models.png" width="50%" height="50%" /></center>\n<ul>\n<li><em>"However, to start, weighing the merits of different networks would be like arguing about the performance of different cars before driving for the first time. Building a network from scratch would be like building your own car. Let\'s drive first. We\'ll get there."</em></li>\n<li>An <strong>epoch</strong> is one trip through the entire training dataset. </li>\n<li>AlexNet with Caffe was used.</li>\n<li>Inferencing after models are created (image from NVIDIA):</li>\n</ul>\n<center><img src="https://dplogscontent.blob.core.windows.net/dplogs/networks2modelsandinference.png" width="50%" height="50%" /></center>\n \n- Screenshot of inferencing written digits after creating a model by training the network with digit images. Accuracy 96.33%.\n<center><img src="https://dplogscontent.blob.core.windows.net/dplogs/inferencingmodel1.png" width="50%" height="50%" /></center>\n<ul>\n<li>Screenshot of inferencing random objects after creating a model by training the network with Caltech 101. Accuracy 44.6%.</li>\n</ul>\n<center><img src="https://dplogscontent.blob.core.windows.net/dplogs/inferencingmodel2.png" width="50%" height="50%" /></center>\n</li>\n<li>\n<p>Other highlights : </p>\n<ul>\n<li>\n<p>Companies presenting machine learning applications : </p>\n<ul>\n<li>Dimensional Mechanics</li>\n<li>CONVERSATION.ONE</li>\n<li>Manzama</li>\n<li>GE</li>\n</ul>\n</li>\n<li>\n<p>Recommended reading : </p>\n<ul>\n<li>An executive guide to Machine Learning</li>\n<li>Predictive Analysis - An introduction to everyone</li>\n</ul>\n</li>\n<li>Panel discussion : Ethical AI - Reducing Conscious and Unconscious Bias </li>\n</ul>\n</li>\n</ul>',frontmatter:{date:"Thursday November 02 2017 09:02:00 PM",path:"/machinery_ai_dev_con_seattle_wa",title:"Machinery.AI Developer Conference (Seattle, WA)",keywords:"machine-learning, machinery-ai, devcon",description:"Machinery.AI Developer Conference (Seattle, WA)",image_url:"https://pbs.twimg.com/media/DNrvYXSVwAAcbN9.jpg",image_alt:"Machinery.AI Dev Con Seattle",image_width:"445",image_height:"250"}}},pathContext:{}}}});
//# sourceMappingURL=path---machinery-ai-dev-con-seattle-wa-a3030af624b968eee1c5.js.map