import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JFYEntity } from './jfy-api.entity';
import { Repository } from 'typeorm';
@Injectable()
export class JfyApiService {

    constructor(@InjectRepository(JFYEntity) private repo: Repository<JFYEntity>) { }

    async findAll() {
        try {
            const allData = await this.repo.find();
            return allData;
        } catch {
            throw new Error("all data not found")
        }
    }
    create(name: string, price: string, image: string) {
        const justforyou = this.repo.create({ name, price, image })
        // create mean user entity instance ทำไมต้องมีการสร้างก่อนเพราะ อาจมีการทำอะไรสักอย่างกับ user.entity เช่น validate isString or something
        // จึงต้องมีการสร้าง create ก่อนที่จะ save
        return this.repo.save(justforyou)
        //save mean take entity and save to sqlite database
    }
    findOne(id: number) {
        const findOne = this.repo.findOne({ where: { id: id } });
        if (!findOne) {
            throw new Error("Id not found")
        }
        console.log(findOne)
        return findOne
    }
    async remove(id: number) {
        const data = await this.findOne(id);
        if (!data) {
            throw new Error("Id not found")
        }
        return this.repo.remove(data)
    }
    async removeAll() {
        const data = await this.repo.find();
        if (!data) {
            throw new Error("Id not found")
        }
        return this.repo.remove(data)
    }
}
