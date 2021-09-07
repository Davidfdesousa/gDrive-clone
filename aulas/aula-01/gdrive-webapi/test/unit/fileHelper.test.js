import { jest, describe, test, expect } from "@jest/globals";
import Routes from "../../src/routes.js";
import fs from 'fs'
import FileHelper from "../../src/fileHelper.js";

describe("#FileHelper ", () => {
  describe("#getFileStatus", () => {

    test("it should return files statuses in correct format", async () => {
      const statMock = {
        dev: 16777222,
        mode: 33188,
        nlink: 1,
        uid: 501,
        gid: 20,
        rdev: 0,
        blksize: 4096,
        ino: 35102834,
        size: 114118,
        blocks: 224,
        atimeMs: 1630986018803.4534,
        mtimeMs: 1630986016715.9583,
        ctimeMs: 1630986016716.3748,
        birthtimeMs: 1630986016715.6094,
        atime: '2021-09-07T03:40:18.803Z',
        mtime: '2021-09-07T03:40:16.716Z',
        ctime: '2021-09-07T03:40:16.716Z',
        birthtime: '2021-09-07T03:40:16.716Z'
      }

      const mockUser = 'davidfdesousa'
      process.env.USER = mockUser

      const filename = "file.png"

      jest.spyOn(fs.promises, fs.readdir.name)
        .mockResolvedValue([filename])

      jest.spyOn(fs.promises, fs.promises.stat.name)
        .mockResolvedValue(statMock)
        
      const result = await FileHelper.getFilesStatus('/tmp')
      const expectedResult = [
        {
          size: "114 kB",
          lastModified: statMock.birthtime,
          owner: mockUser,
          file: filename,
        },
      ];

      expect(fs.promises.stat).toHaveBeenCalledWith(`/tmp/${filename}`)
    });
  });
});
