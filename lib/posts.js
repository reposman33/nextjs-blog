import fs from "fs";
import remark from "remark";
import html from "remark-html";
import path from "path";
import matter from "gray-matter";

const POSTS = "posts";
const postsDirectory = path.join(process.cwd(), POSTS);

const getSortedPostsData = () => {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .map((fileName) => {
            // Remove ".md" from file name to get id
            const id = fileName.replace(/\.md$/, "");

            // Read markdown file as string
            const fullPath = path.join(postsDirectory, fileName);
            // if file is not a directory entry, process
            if (!fs.statSync(fullPath).isDirectory()) {
                const fileContents = fs.readFileSync(fullPath, "utf8");
                // Use gray-matter to parse the post metadata section
                const matterResult = matter(fileContents);
                // Combine the data with the id and return
                return {
                    id,
                    ...matterResult.data,
                };
            }
        })
        // ... but other entries will return 'undefined' so filter the directory entries
        .filter((id) => typeof id !== "undefined");

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
};

const getAllPostIds = () => {
    const _fileNames = fs.readdirSync(postsDirectory).filter((fn) => fn !== "sports");
    // filename should correspond to route so remove the extension
    const postIds = _fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ""),
            },
        };
    });

    return postIds;
};

const _getAllPostIds = (dirPath = postsDirectory, arrayOfFiles = []) => {
    const files = fs.readdirSync(dirPath);

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "\\" + file).isDirectory()) {
            arrayOfFiles = _getAllPostIds(dirPath + "\\" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(dirPath + "\\" + file);
        }
    });

    return arrayOfFiles;
};

const getPostData = async (id) => {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const postData = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(postData);

    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHTML = await processedContent.toString();

    // Combine the data with the id and contentHtml
    return { id, contentHTML, ...matterResult.data };
};

export { getSortedPostsData, getAllPostIds, getPostData, _getAllPostIds };
