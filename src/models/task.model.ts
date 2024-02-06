import {prop, getModelForClass, modelOptions} from '@typegoose/typegoose';


@modelOptions({schemaOptions:{timestamps:true}})
class Tasks{

    @prop({ required: true, maxlength: 100 })
    public description!: string;


    @prop({ required: true })
    public status!: boolean;


    @prop({ required: true, maxlength: 150 })
    public email!: string;
}

const Task = getModelForClass(Tasks);

export default Task;

